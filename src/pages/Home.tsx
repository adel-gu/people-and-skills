import { useAppSelector } from '../hooks/hooks';
import { PeopleState, Strength } from '../types/redux';
import SearchBar from '../components/search';
import { Avatar } from '../components/avatar';
import Skill from '../components/skill';
import SkillItem from '../components/skill/SkillItem';
import { FaWeightHanging } from 'react-icons/fa';
import { Bars } from 'react-loader-spinner';
const Home = () => {
  const { person, isPending, profiencies, isRejected, error } =
    useAppSelector<PeopleState>((state) => state.person);

  return (
    <div className="h-full">
      <section>
        <SearchBar></SearchBar>
      </section>
      {isPending ? (
        <div className="h-[20rem] flex justify-center items-center">
          <Bars
            height="80"
            width="80"
            color="#cddc39"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {isRejected ? (
            <div className="h-[20rem] flex justify-center items-center">
              <h1 className="text-3xl text-[#cddc39]">{error}!</h1>
            </div>
          ) : (
            <>
              <section className="flex flex-col gap-2 items-center justify-center p-14">
                <Avatar src={person.picture} alt={person.name} />
                <h1 className="text-2xl mt-2">{person.name}</h1>
              </section>
              <section>
                {Object.entries(profiencies).map(([key, profienciesArr]) => (
                  <div key={key} className="mb-4">
                    <h3 className="text-white ml-1 mb-2">{key}</h3>
                    <div className="flex flex-wrap gap-2 ">
                      {profienciesArr.map((profiency) => (
                        <Skill key={profiency.id}>
                          <SkillItem>{profiency.name}</SkillItem>
                          <SkillItem>
                            <FaWeightHanging />
                          </SkillItem>
                          <SkillItem>{profiency.weight}</SkillItem>
                        </Skill>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default Home;
