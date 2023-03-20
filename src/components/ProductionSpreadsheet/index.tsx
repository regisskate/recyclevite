import { ResultContainer } from './Spreadsheest';
export function ProductionSpreadsheet() {
  return (
    <ResultContainer>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Inicil</th>
            <th>Fim</th>
            <th>Peso</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Papelão</td>
            <td>12:00</td>
            <td>13:00</td>
            <td>1.000 kg</td>
          </tr>
        </tbody>
      </table>

    </ResultContainer>
  );
}