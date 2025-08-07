import React from 'react'

const Weekly = () => {
  const leaderboardData = [
  { rank: 1, name: 'John Doe', points: 1200 },
  { rank: 2, name: 'Jane Smith', points: 1100 },
  { rank: 3, name: 'Alex Johnson', points: 1050 },
  { rank: 4, name: 'Emily Davis', points: 1020 },
  { rank: 5, name: 'Chris Brown', points: 1000 },
];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Weekly Leaderboard</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Rank</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.rank} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-700">{player.rank}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">{player.name}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(Weekly);