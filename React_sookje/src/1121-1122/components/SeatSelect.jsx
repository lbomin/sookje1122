import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function SeatSelect({price}) {
    let rows = ['A', 'B', 'C'];
    let numbers = [1, 2, 3];

    let [selected, setSelected] = useState([]);
    let occupied = ['A2', 'B2'];

    let navigate = useNavigate();

    function selectSeat(seat) {
        if (selected.includes(seat)) {
            setSelected(selected.filter(s => s !== seat));
        } else {
            setSelected([...selected, seat]);
        }
    }

    function booking() {
        alert('예매 완료!');
        navigate('/');
    }

    return (
        <div className="text-center mt-4">
            <h4>좌석 선택</h4>
            <div className="bg-secondary text-white p-2 mb-4">
                SCREEN
            </div>

            {rows.map(row => (
                <div key={row} className="mb-2">
                    <span className="me-3">{row}</span>

                    {numbers.map(num => {
                        let seat = row + num;
                        let isSelected = selected.includes(seat);
                        let isOccupied = occupied.includes(seat);

                        return (
                            <Button style={{
                                backgroundColor: isSelected ? 'gray' : 'white'
                            }}
                                key={seat}
                                size="sm"
                                className="m-1"
                                variant={
                                    isOccupied ? 'secondary' :
                                    isSelected ? 'primary' : 'outline-primary'
                                }
                                disabled={isOccupied}
                                onClick={() => selectSeat(seat)}
                            >
                                {num}
                            </Button>
                        );
                    })}
                </div>
            ))}

            <h5 className="mt-4">
                선택 좌석: {selected.join(', ') || '없음'}
            </h5>

            <h5>선택 좌석 수: {selected.length}개</h5>

            <h5>
                총 금액: {(selected.length * price).toLocaleString()}원
            </h5>

            <Button variant="secondary" onClick={() => setSelected([])}>
                선택 초기화
            </Button>

            <Button
                disabled={selected.length === 0}
                onClick={booking}
            >
                예매하기
            </Button>
        </div>
    );
}
