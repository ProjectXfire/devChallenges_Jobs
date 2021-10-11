import React from "react";
// Providers
import { BiWorld } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { Pagination, PaginationProps } from "semantic-ui-react";
// Utils
import { daysBetween } from "@utils/daysBetween";
// Models
import { Job } from "models/job";
// Components
import { Loading } from "@components/loading";
// Styled components
import { colors } from "@styles/variables/colors";
import {
  Location as LocationStyled,
  LocationInput,
  LocationRadioGroup,
  LocationSearch,
  LocationJobs,
  JobCard,
  JobCardContent,
  JobCardLocations,
  JobCardFooter,
  PaginationContainer,
} from "@styles/components/location";
import { Title } from "@styles/shared/index";

type LocationProps = {
  handleRadioValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePaginationChange: (activePage: number) => void;
  handleInputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleJobDetail: (id: number) => void;
  inputSearch: string;
  loading: boolean;
  jobs: Job[];
  pages: number;
  activePage: number;
  checked: string;
};

export const Location = ({
  handleRadioValue,
  handlePaginationChange,
  handleInputSearch,
  handleJobDetail,
  inputSearch,
  loading,
  jobs,
  pages,
  activePage,
  checked,
}: LocationProps) => {
  return (
    <LocationStyled>
      <LocationSearch>
        <Title size="sm" color={colors.title}>
          <strong>LOCATION</strong>
        </Title>
        <LocationInput>
          <BiWorld color={colors.placeholder} />
          <input
            placeholder="City"
            type="text"
            onChange={(e) => handleInputSearch(e)}
            value={inputSearch}
          />
        </LocationInput>
        <LocationRadioGroup>
          <div>
            <input
              type="radio"
              name="loc"
              checked={checked === "London, United Kingdom" ? true : false}
              value="London, United Kingdom"
              onChange={(e) => handleRadioValue(e)}
            />
            London
          </div>
          <div>
            <input
              type="radio"
              name="loc"
              value="Amsterdam, Netherlands"
              checked={checked === "Amsterdam, Netherlands" ? true : false}
              onChange={(e) => handleRadioValue(e)}
            />
            Amsterdam
          </div>
          <div>
            <input
              type="radio"
              name="loc"
              value="New York, NY"
              checked={checked === "New York, NY" ? true : false}
              onChange={(e) => handleRadioValue(e)}
            />
            New York
          </div>
          <div>
            <input
              type="radio"
              name="loc"
              value="Berlin, Germany"
              checked={checked === "Berlin, Germany" ? true : false}
              onChange={(e) => handleRadioValue(e)}
            />
            Berlin
          </div>
        </LocationRadioGroup>
      </LocationSearch>
      {loading ? (
        <Loading />
      ) : (
        <LocationJobs>
          <>
            {jobs.map((job) => (
              <JobCard key={job.id} onClick={() => handleJobDetail(job.id)}>
                <JobCardContent>
                  <p>
                    <strong>{job.company.name}</strong>
                  </p>
                  <p>{job.name}</p>
                </JobCardContent>
                <JobCardFooter>
                  <div>
                    <BiWorld />
                    <JobCardLocations>
                      {job.locations.map((loc, index) => (
                        <span key={index}>{loc.name}</span>
                      ))}
                    </JobCardLocations>
                  </div>
                  <div>
                    <BsClock />
                    <span>{daysBetween(job.publication_date)} days ago</span>
                  </div>
                </JobCardFooter>
              </JobCard>
            ))}
            <PaginationContainer>
              <Pagination
                size="mini"
                boundaryRange={0}
                activePage={activePage}
                siblingRange={1}
                totalPages={pages}
                onPageChange={(
                  e: React.MouseEvent<HTMLAnchorElement>,
                  { activePage }: PaginationProps
                ) => {
                  if (typeof activePage === "number") {
                    handlePaginationChange(activePage);
                  }
                }}
              />
            </PaginationContainer>
          </>
        </LocationJobs>
      )}
    </LocationStyled>
  );
};
