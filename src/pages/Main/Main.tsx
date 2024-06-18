import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Header from '../../components/Header'
import Wrapper from '../../components/Wrapper'
import Footer from '../../components/Footer'
import readingKingData from '../../data/readingKing.json'
import ReadingKing from './components/ReadingKing'

export default function Main() {
    return (
        <>
            <Header />
            <Wrapper>
                <h1 className="text-5xl font-extrabold mb-10">
                    책과 함께하는 여정, 당신의 서재를 채워보세요
                </h1>
                <p className="text-2xl font-bold mb-4">
                    책을 서재에 담고, 독서를 하며 기억하고 싶은 내용을
                    기록하세요
                </p>
                <p className="text-2xl font-bold mb-20">
                    BookNook은 책을 읽기 좋은 공간이라는 의미입니다. 아늑한
                    공간을 만들어 드리겠습니다
                </p>
                <div>
                    <h2 className="text-2xl font-bold">이달의 독서왕 👑</h2>
                    <p className="mb-6">
                        이달의 독서왕은 사용자 중 가장 많은 책을 읽은 top 10
                        입니다 (읽은 책 기준)
                    </p>
                    <div className="flex flex-col gap-8 mx-auto">
                        <div className="grid grid-cols-3 gap-10">
                            {readingKingData?.readingKing.map(
                                (data) =>
                                    data.rank <= 3 && (
                                        <ReadingKing
                                            key={data.rank}
                                            rank={data.rank}
                                            profileImg={data.profileImg}
                                            nickname={data.nickname}
                                            books={data.books}
                                        />
                                    )
                            )}
                        </div>
                        <Table aria-label="독서왕 순위(4~10위)">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" width={70}>
                                        순위
                                    </TableCell>
                                    <TableCell align="left">이름</TableCell>
                                    <TableCell align="left">권 수</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {readingKingData?.readingKing.map(
                                    (data) =>
                                        data.rank > 3 && (
                                            <TableRow key={data.rank}>
                                                <TableCell align="center">
                                                    {data.rank}
                                                </TableCell>
                                                <TableCell>
                                                    {data.nickname}
                                                </TableCell>
                                                <TableCell>
                                                    {data.books}
                                                </TableCell>
                                            </TableRow>
                                        )
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}
