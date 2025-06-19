import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import BewertungMannPage from './BewertungMannPage';
import BewertungFrauPage from './BewertungFrauPage';
import ErgebnisPage from './ErgebnisPage';

export default function App() {
  const [mannAnswers, setMannAnswers] = useState<Record<string, boolean>>({});
  const [frauAnswers, setFrauAnswers] = useState<Record<string, boolean>>({});

  const reset = () => {
    setMannAnswers({});
    setFrauAnswers({});
  };

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route
        path="/bewertung-mann"
        element={
          <BewertungMannPage
            answers={mannAnswers}
            setAnswers={setMannAnswers}
          />
        }
      />
      <Route
        path="/bewertung-frau"
        element={
          <BewertungFrauPage
            answers={frauAnswers}
            setAnswers={setFrauAnswers}
          />
        }
      />
      <Route
        path="/ergebnis"
        element={
          <ErgebnisPage
            mannAnswers={mannAnswers}
            frauAnswers={frauAnswers}
            reset={reset}
          />
        }
      />
    </Routes>
  );
}