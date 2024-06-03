import { SecondaryTitle } from "components/ui/SecondayTitle";
import React from "react";
import { Section } from "./QASection.style";
import { QuestionAnswer } from "./QuestionAnswer";

export const QASection = () => {
  return (
    <Section>
      <SecondaryTitle style={{ marginBottom: "32px" }}>FAQ</SecondaryTitle>
      <QuestionAnswer question="Quels sont les signes d'une infestation de guêpes ou de frelons ?">
        <p>
          Les signes peuvent inclure la présence de nids, un nombre accru
          d'insectes autour de la propriété, ou des comportements agressifs.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Quels sont les dangers associés à une infestation de guêpes ou de frelons ?">
        <p>
          Les piqûres peuvent être douloureuses et potentiellement dangereuses
          pour les personnes allergiques. Les nids de guêpes et de frelons
          peuvent également devenir agressifs s'ils se sentent menacés.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Comment localiser un nid de guêpes ou de frelons sur ma propriété ?">
        <p>
          Les nids peuvent être trouvés sous les toits, dans les arbres, dans
          les creux de murs, ou dans des endroits isolés. Nous pouvons vous
          aider à les localiser de manière sûre.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Quelles méthodes utilisez-vous pour éliminer les nids de guêpes et de frelons ?">
        <p>
          Nous utilisons des méthodes spécifiques, telles que la pulvérisation
          de pesticides appropriés, l'enlèvement mécanique des nids, et d'autres
          techniques adaptées à chaque situation. Rassurez-vous cela n'est
          dangereux ni pour vous ni pour vos animaux domestiques.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Puis-je essayer de traiter le nid moi-même ?">
        <p>
          Même si le nid paraît petit et accessible, nous ne recommandons pas
          d'essayer de traiter les nids vous-même, car cela peut être
          dangereux.En attendant l’intervention, Évitez les mouvements brusques
          près du nid et restez à distance.
        </p>
        <p>
          Nos professionnels sont équipés et formés pour garantir une
          élimination sécurisée.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Combien de temps prendra l'intervention pour éliminer les guêpes ou les frelons ?">
        <p>
          La durée dépend de la taille du nid, de sa taille et de son
          accessibilité, comptez généralement entre 1h et 2h. Nous visons à
          intervenir rapidement et efficacement.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Puis-je rester sur place lors de l’intervention ?">
        <p>
          Dans la plupart des cas, il n'est pas nécessaire de quitter la maison
          pendant le traitement, mais cela dépend du type d'insectes et des
          produits utilisés. Nous vous informerons des précautions nécessaires.
        </p>
      </QuestionAnswer>
    </Section>
  );
};
