import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Match = ({ standings, match }) => {
  const [homeTeamLogo, setHomeTeamLogo] = useState(null);
  const [awayTeamLogo, setAwayTeamLogo] = useState(null);
  const [teamNull, setTeamNull] = useState(0);
  const [loading, setLoading] = useState(true);

  console.log(match);
  console.log(standings);

  const fetchData = async () => {
    if (match.homeTeam.id === null || match.awayTeam.id === null) {
      setTeamNull(1);
      setLoading(true);
      return;
    }

    //extract out team logos here
    standings.forEach((standing) => {
      standing.table.forEach((teams) => {
        if (teams.team.id === match.homeTeam.id) {
          setHomeTeamLogo(teams.team.crestUrl);
        } else if (teams.team.id === match.awayTeam.id) {
          setAwayTeamLogo(teams.team.crestUrl);
        }
        if (homeTeamLogo !== null && awayTeamLogo !== null) {
          return;
        }
      });
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <>
          <p>{match.stage}</p>

          <TableContainer
            className="matchTableContainer"
            component={Paper}
            elevation={6}
          >
            <Table className="matchTable" aria-label="simple table">
              <TableHead>
                <TableRow className="matchTableRow">
                  <TableCell
                    align="center"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="matchTeamContainer">
                      {teamNull === 1 ? (
                        "TBA"
                      ) : (
                        <>
                          {match.homeTeam.name}
                          {homeTeamLogo !== null ? (
                            <img
                              src={homeTeamLogo}
                              alt="homeTeamLogo"
                              className="teamLogo"
                            />
                          ) : null}
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    {match.status === "SCHEDULED" ? (
                      <p>vs.</p>
                    ) : (
                      <p>
                        {match.score.fullTime.homeTeam}-
                        {match.score.fullTime.awayTeam}
                      </p>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <div className="matchTeamContainer">
                      {teamNull === 1 ? (
                        "TBA"
                      ) : (
                        <>
                          {match.awayTeam.name}
                          {awayTeamLogo !== null ? (
                            <img
                              src={awayTeamLogo}
                              alt="awayTeamLogo"
                              className="teamLogo"
                            />
                          ) : null}
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <p className={match.status}>{match.status}</p>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </>
      ) : (
        <p>Loading . . .</p>
      )}
    </>
  );
};

export default Match;
