import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Progress } from './components/ui/progress';
import { Badge } from './components/ui/badge';
import { CheckCircle2, XCircle, RotateCcw, Brain, Clock, Calendar, Users, Star, Target, Zap, Trophy, Award } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import mentoriaImage from 'figma:asset/e26c8fa552a31e7d782dac058cc2ea181098fba3.png';

const quizData = [
  {
    question: "Seu cliente tem crises de diarreia antes de reuniões importantes. O que pode estar por trás?",
    options: [
      "Raiva reprimida e ressentimento",
      "Ansiedade crônica e medo de falhar",
      "Falta de apoio e desmotivação",
      "Culpa e dependência emocional"
    ],
    correct: 1,
    explanation: "Síndrome do Intestino Irritável"
  },
  {
    question: "Seu cliente guarda mágoas há anos e sofre de gastrite. O que o corpo está mostrando?",
    options: [
      "Falta de autoestima",
      "Medo da rejeição",
      "Raiva reprimida e preocupação excessiva",
      "Tristeza e melancolia"
    ],
    correct: 2,
    explanation: "Gastrite"
  },
  {
    question: "Cliente orgulhoso e autocrítico desenvolveu úlcera após uma falência. Causa provável:",
    options: [
      "Medo do futuro",
      "Raiva reprimida",
      "Perda de propósito",
      "Orgulho ferido e dificuldade em pedir ajuda"
    ],
    correct: 3,
    explanation: "Úlcera Péptica"
  },
  {
    question: "Seu cliente sente azia e refluxo sempre após discussões evitadas. Indica:",
    options: [
      "Palavras não ditas e dificuldade em se expressar",
      "Excesso de controle",
      "Raiva reprimida",
      "Dependência emocional"
    ],
    correct: 0,
    explanation: "Refluxo Gastroesofágico"
  },
  {
    question: "Cliente sofre de prisão de ventre e é muito controlador. Isso pode refletir:",
    options: [
      "Falta de autoestima",
      "Necessidade excessiva de controle e medo de soltar emoções",
      "Raiva reprimida",
      "Excesso de empatia"
    ],
    correct: 1,
    explanation: "Constipação Intestinal"
  },
  {
    question: "Criança desenvolve asma após o divórcio dos pais, sentindo-se culpada. Indica:",
    options: [
      "Falta de afeto",
      "Medo do abandono",
      "Sentimento de sufocamento e culpa emocional",
      "Raiva contida"
    ],
    correct: 2,
    explanation: "Asma"
  },
  {
    question: "Cliente com sinusite crônica relata irritação com pessoas próximas. Causa provável:",
    options: [
      "Falta de ar emocional",
      "Ansiedade e medo",
      "Excesso de controle",
      "Irritação reprimida e lágrimas não choradas"
    ],
    correct: 3,
    explanation: "Sinusite Crônica"
  },
  {
    question: "Família com discussões constantes desenvolve bronquite. Representa:",
    options: [
      "Ambiente familiar tóxico e inflamação emocional",
      "Excesso de responsabilidades",
      "Medo de perder o controle",
      "Falta de expressão emocional"
    ],
    correct: 0,
    explanation: "Bronquite Recorrente"
  },
  {
    question: "Cliente hipertenso vive sob pressão e quer controlar tudo. Indica:",
    options: [
      "Medo do futuro",
      "Raiva contida e pressão emocional constante",
      "Falta de autoconfiança",
      "Ansiedade e pânico"
    ],
    correct: 1,
    explanation: "Hipertensão Arterial"
  },
  {
    question: "Cliente com arritmia após uma traição. Causa emocional:",
    options: [
      "Falta de amor-próprio",
      "Raiva reprimida",
      "Conflitos afetivos intensos e ansiedade",
      "Dependência emocional"
    ],
    correct: 2,
    explanation: "Arritmias Cardíacas"
  },
  {
    question: "Cliente com taquicardia antes de compromissos sociais. Indica:",
    options: [
      "Raiva acumulada",
      "Falta de autoestima",
      "Culpa reprimida",
      "Ansiedade antecipatória e medo do futuro"
    ],
    correct: 3,
    explanation: "Taquicardia"
  },
  {
    question: "Cliente com eczema nas mãos após o casamento. Pode refletir:",
    options: [
      "Irritação com contato físico e conflito de proximidade",
      "Falta de aceitação corporal",
      "Raiva reprimida",
      "Vergonha de si"
    ],
    correct: 0,
    explanation: "Dermatite Atópica"
  },
  {
    question: "Cliente com psoríase após perda profissional, sente-se \"descascando por dentro\".",
    options: [
      "Raiva reprimida",
      "Autorrejeição, vergonha e necessidade de \"renascer\"",
      "Medo da rejeição",
      "Isolamento emocional"
    ],
    correct: 1,
    explanation: "Psoríase"
  },
  {
    question: "Cliente com urticária sempre que visita a família. Indica:",
    options: [
      "Raiva reprimida",
      "Falta de amor",
      "Irritação aguda e alergia a situações",
      "Insegurança emocional"
    ],
    correct: 2,
    explanation: "Urticária"
  },
  {
    question: "Cliente com herpes labial quando evita falar sobre algo importante. Causa:",
    options: [
      "Raiva e ciúmes",
      "Culpas reprimidas",
      "Tristeza e rejeição",
      "Palavras não ditas e comunicação bloqueada"
    ],
    correct: 3,
    explanation: "Herpes Labial"
  },
  {
    question: "Cliente cuidadora com dores difusas no corpo. Indica:",
    options: [
      "Dor emocional generalizada e sobrecarga afetiva",
      "Medo de perder o controle",
      "Falta de propósito",
      "Raiva reprimida"
    ],
    correct: 0,
    explanation: "Fibromialgia"
  },
  {
    question: "Cliente com dor lombar crônica e excesso de responsabilidades.",
    options: [
      "Autocrítica severa",
      "Falta de apoio e necessidade de dividir peso emocional",
      "Raiva reprimida",
      "Medo do futuro"
    ],
    correct: 1,
    explanation: "Dor nas Costas"
  },
  {
    question: "Cliente autocrítica e perfeccionista desenvolve artrite.",
    options: [
      "Medo de mudanças",
      "Falta de apoio",
      "Rigidez emocional e autocrítica severa",
      "Raiva reprimida"
    ],
    correct: 2,
    explanation: "Artrite Reumatoide"
  },
  {
    question: "Cliente teimoso tem torcicolo constante. Indica:",
    options: [
      "Raiva reprimida",
      "Culpa inconsciente",
      "Falta de autocontrole",
      "Resistência a mudanças e rigidez mental"
    ],
    correct: 3,
    explanation: "Tensão Muscular / Cervicalgia"
  },
  {
    question: "Cliente com enxaqueca antes de provas ou cobranças. Indica:",
    options: [
      "Perfeccionismo e pressão autoimposta",
      "Raiva reprimida",
      "Medo da rejeição",
      "Falta de clareza mental"
    ],
    correct: 0,
    explanation: "Enxaqueca"
  },
  {
    question: "Cliente com insônia desde que assumiu grandes responsabilidades.",
    options: [
      "Falta de motivação",
      "Preocupação excessiva e necessidade de controle",
      "Medo de falhar",
      "Autocrítica"
    ],
    correct: 1,
    explanation: "Insônia"
  },
  {
    question: "Cliente com vertigem após perda do cônjuge. Indica:",
    options: [
      "Raiva reprimida",
      "Falta de perdão",
      "Perda de referências e \"chão emocional\"",
      "Culpas inconscientes"
    ],
    correct: 2,
    explanation: "Vertigem / Tontura"
  },
  {
    question: "Cliente com cistite recorrente após brigas conjugais. Indica:",
    options: [
      "Falta de intimidade",
      "Ansiedade",
      "Rejeição afetiva",
      "Raiva contida e irritação sexual"
    ],
    correct: 3,
    explanation: "Cistite de Repetição"
  },
  {
    question: "Cliente com impotência após traição da parceira. Indica:",
    options: [
      "Medo de intimidade e bloqueio emocional",
      "Falta de desejo",
      "Raiva e culpa",
      "Falta de autoconfiança"
    ],
    correct: 0,
    explanation: "Impotência Sexual"
  },
  {
    question: "Casal sem causa médica para infertilidade sente medo de repetir padrões familiares.",
    options: [
      "Raiva reprimida",
      "Conflito inconsciente sobre a paternidade/maternidade",
      "Ansiedade de desempenho",
      "Vergonha"
    ],
    correct: 1,
    explanation: "Infertilidade Psicogênica"
  },
  {
    question: "Cliente com diabetes após aposentadoria forçada, sente a vida \"sem doçura\".",
    options: [
      "Raiva reprimida",
      "Falta de propósito",
      "Falta de doçura e amargura emocional",
      "Culpas passadas"
    ],
    correct: 2,
    explanation: "Diabetes Tipo 2"
  },
  {
    question: "Cliente com hipotireoidismo após divórcio. Relata desânimo e lentidão.",
    options: [
      "Falta de confiança",
      "Raiva reprimida",
      "Culpa inconsciente",
      "Desânimo e metabolismo emocional lento"
    ],
    correct: 3,
    explanation: "Hipotireoidismo"
  },
  {
    question: "Cliente pega resfriado sempre que se sobrecarrega no trabalho.",
    options: [
      "Sobrecarga emocional e necessidade de pausa forçada",
      "Falta de vitaminas",
      "Ansiedade",
      "Falta de descanso físico"
    ],
    correct: 0,
    explanation: "Resfriados Frequentes"
  },
  {
    question: "Cliente desenvolve alergias após mudança de cidade. Indica:",
    options: [
      "Raiva reprimida",
      "Rejeição à nova fase e hipersensibilidade emocional",
      "Falta de controle",
      "Ansiedade"
    ],
    correct: 1,
    explanation: "Alergias Diversas"
  },
  {
    question: "Cliente engordou após trauma e evita contato íntimo. Indica:",
    options: [
      "Falta de disciplina",
      "Ansiedade alimentar",
      "Necessidade de proteção emocional e medo de vulnerabilidade",
      "Culpa reprimida"
    ],
    correct: 2,
    explanation: "Obesidade"
  },
  {
    question: "Adolescente com anorexia se compara e busca aceitação constante. Indica:",
    options: [
      "Falta de autoestima",
      "Raiva reprimida",
      "Medo de crescer",
      "Medo de rejeição e busca por pertencimento"
    ],
    correct: 3,
    explanation: "Anorexia"
  }
];

const interpretations = [
  {
    min: 26,
    max: 31,
    title: "Superpoder Ativado!",
    description: "Parabéns! Você domina o terceiro superpoder do terapeuta TRG. Sua leitura psicossomática está afiada como uma lâmina terapêutica. A mentoria de outubro será perfeita para você aprofundar ainda mais seus conhecimentos!",
    color: "bg-green-600",
    points: 150
  },
  {
    min: 20,
    max: 25,
    title: "Superpoder em Desenvolvimento!",
    description: "Parabéns! Você está no caminho certo para dominar o terceiro superpoder! A mentoria de outubro será fundamental para você aprimorar suas habilidades em psicossomática.",
    color: "bg-[#E40045]",
    points: 120
  },
  {
    min: 12,
    max: 19,
    title: "Descobrindo o Superpoder",
    description: "Parabéns! O terceiro superpoder está despertando em você! A mentoria de outubro é exatamente o que você precisa para fortalecer sua intuição psicossomática e desenvolver essa habilidade transformadora.",
    color: "bg-amber-600",
    points: 80
  },
  {
    min: 0,
    max: 11,
    title: "Superpoder Adormecido!",
    description: "Parabéns por dar o primeiro passo! Todo terapeuta TRG tem o terceiro superpoder dentro de si. A mentoria de outubro será perfeita para despertar essa habilidade e transformar sua prática terapêutica.",
    color: "bg-slate-600",
    points: 40
  }
];

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [shuffledQuizData, setShuffledQuizData] = useState<typeof quizData>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);

  // Function to calculate estimated time remaining
  const getEstimatedTimeRemaining = () => {
    if (!startTime) return 10;
    
    const elapsed = (new Date().getTime() - startTime.getTime()) / 1000 / 60; // minutes
    const averageTimePerQuestion = elapsed / (currentQuestion + 1);
    const remainingQuestions = shuffledQuizData.length - currentQuestion - 1;
    const estimatedRemaining = Math.max(0, Math.ceil(remainingQuestions * averageTimePerQuestion));
    
    return Math.max(1, Math.min(10, estimatedRemaining));
  };

  // Function to shuffle answers randomly
  const shuffleAnswers = (question: typeof quizData[0]) => {
    const options = [...question.options];
    const correctAnswer = question.correct;
    
    // Create array of indices and shuffle them
    const indices = [0, 1, 2, 3];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Create new shuffled options array and find new correct index
    const shuffledOptions = indices.map(i => options[i]);
    const newCorrectIndex = indices.findIndex(i => i === correctAnswer);
    
    return {
      ...question,
      options: shuffledOptions,
      correct: newCorrectIndex
    };
  };

  // Initialize shuffled quiz data once
  useEffect(() => {
    if (quizData.length > 0 && shuffledQuizData.length === 0) {
      const shuffled = quizData.map(question => shuffleAnswers(question));
      setShuffledQuizData(shuffled);
    }
  }, [shuffledQuizData.length]);

  // Safety check for quiz data
  if (!quizData || quizData.length === 0 || shuffledQuizData.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl text-[#E40045] mb-4">Quiz em carregamento...</h1>
          <p className="text-gray-600">Por favor, aguarde um momento.</p>
        </div>
      </div>
    );
  }
  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return; // Evita múltiplas seleções
    
    const isCorrect = answerIndex === shuffledQuizData[currentQuestion].correct;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const newUserAnswers = [...userAnswers, selectedAnswer!];
    setUserAnswers(newUserAnswers);

    if (currentQuestion < shuffledQuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setStartTime(new Date());
  };



  const getInterpretation = () => {
    const interpretation = interpretations.find(interp => score >= interp.min && score <= interp.max);
    return interpretation || interpretations[interpretations.length - 1]; // fallback to last interpretation
  };

  const progress = shuffledQuizData.length > 0 ? ((currentQuestion + (quizCompleted ? 1 : 0)) / shuffledQuizData.length) * 100 : 0;

  // Tela inicial
  if (!quizStarted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-8">
          <div className="w-full max-w-md space-y-6 mx-4">
            {/* Header centralizado */}
            <div className="text-center space-y-4">
              <div className="text-center">
                <h1 className="text-base text-[#E40045] leading-tight">
                  A Mentoria de Outubro<br />
                  <span className="text-xl font-bold">PSICOSSOMÁTICA:</span><br />
                  O <span className="font-bold">Terceiro Superpoder</span><br />
                  do Terapeuta TRG
                </h1>
              </div>
              
              <p className="text-base text-gray-600">
                Está chegando! Que tal testar seus conhecimentos no tema?
              </p>
            </div>
            

            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-gray-600 text-base">
                <Users className="h-4 w-4" />
                <span>Este quiz é exclusivo para terapeutas TRG</span>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
              <p className="text-lg text-[#E40045] font-bold">31 Perguntas</p>
              <p className="text-base text-gray-500">Em torno de 10 minutos</p>
            </div>

            <Button 
              onClick={startQuiz} 
              className="w-full bg-[#E40045] hover:bg-[#E40045]/90 text-white shadow-lg" 
              size="lg"
            >
              Testar Meu <span className="font-bold">Terceiro Superpoder</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const interpretation = getInterpretation();
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-4">
          <div className="w-full max-w-md space-y-4 mx-4">
            {/* Header compacto */}
            <div className="text-center">
              <h1 className="text-base text-[#E40045] font-bold">Terceiro Superpoder Testado!</h1>
              <p className="text-sm text-gray-600">Veja seu resultado</p>
            </div>

            {/* Score Display - Compacto */}
            <div className="text-center">
              <div className="bg-[#E40045] text-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-yellow-300" />
                  <div className="text-3xl font-bold">{score}</div>
                  <Award className="w-5 h-5 text-yellow-300" />
                </div>
                <p className="text-base">Acertos de {shuffledQuizData.length} questões</p>
                <div className="mt-2 bg-white/20 rounded-full h-1.5">
                  <div 
                    className="bg-yellow-300 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(score / shuffledQuizData.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm mt-1 opacity-90">
                  {Math.round((score / shuffledQuizData.length) * 100)}% de precisão
                </p>
              </div>
            </div>
            
            {interpretation && (
              <div className="text-center">
                <div className="text-lg text-[#E40045] font-bold mb-2">
                  {interpretation.title}
                </div>
                <p className="text-base leading-snug bg-gray-50 p-3 rounded-lg">
                  {interpretation.description}
                </p>
              </div>
            )}

            {/* Cartaz da Mentoria - Compacto */}
            <div className="space-y-3">
              <div className="text-center">
                <img 
                  src={mentoriaImage}
                  alt="Mentoria de Outubro - Psicossomática: O Terceiro Superpoder do Terapeuta TRG" 
                  className="w-full rounded-lg shadow-md max-h-64 object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>29 de Outubro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Exclusivo TRG</span>
                  </div>
                </div>
                <a href="https://sndflw.com/i/dDuKbwIDoUo1pWwyB9Tk" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg"
                    size="lg"
                  >
                    Entrar no Grupo da Mentoria
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = shuffledQuizData[currentQuestion];
  
  // Safety check for current question
  if (!currentQ) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl text-[#E40045] mb-4">Erro no quiz</h1>
          <p className="text-gray-600">Pergunta não encontrada.</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-[#E40045] hover:bg-[#E40045]/90"
          >
            Recarregar Quiz
          </Button>
        </div>
      </div>
    );
  }
  
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQ.correct;

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 py-3 px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 bg-[#E40045] rounded-full flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-base text-[#E40045] font-bold">
                Terceiro Superpoder
              </span>
              <p className="text-base text-gray-500">Quiz de Psicossomática</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-[#E40045] text-[#E40045] bg-white text-base">
              {currentQuestion + 1} / {shuffledQuizData.length}
            </Badge>
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-amber-500" />
              <span className="text-base text-gray-500">{score}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Progress value={progress} className="h-2 bg-gray-200" />
          <div 
            className="absolute top-0 left-0 h-2 rounded-full transition-all duration-500 bg-[#E40045]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-shrink-0 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex items-start gap-3">
          <div className="bg-[#E40045] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-base font-bold">{currentQuestion + 1}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-base leading-tight font-medium">{currentQ.question}</h2>
            {/* Indicador de progresso motivacional */}
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <Target className="h-3 w-3" />
              <span>
                {Math.round((currentQuestion / shuffledQuizData.length) * 100)}% concluído • {shuffledQuizData.length - currentQuestion - 1} restantes
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-6 py-4 space-y-3 overflow-y-auto" style={{ paddingTop: '10vh' }}>
        <div className="grid gap-2">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === currentQ.correct;
            const isWrongSelected = showResult && isSelected && !isCorrectOption;
            
            return (
              <Button
                key={index}
                variant="outline"
                className={`text-left h-auto p-2.5 justify-start transition-all duration-300 text-base ${
                  !showResult && isSelected
                    ? "border-[#E40045] bg-gray-50 shadow-lg"
                    : showResult && isCorrectOption
                    ? "bg-green-600 text-white hover:bg-green-700 border-green-600 shadow-lg"
                    : showResult && isWrongSelected
                    ? "bg-red-600 text-white hover:bg-red-700 border-red-600 shadow-lg"
                    : showResult
                    ? "opacity-40 border-gray-200"
                    : "hover:border-[#E40045]/50 hover:bg-gray-50 border-gray-200"
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="mr-2 min-w-[18px] text-base">
                  {String.fromCharCode(65 + index)})
                </span>
                <span className="flex-1 text-wrap leading-tight text-base">{option}</span>
                {showResult && isCorrectOption && (
                  <CheckCircle2 className="w-3 h-3 ml-2 text-white flex-shrink-0" />
                )}
                {showResult && isWrongSelected && (
                  <XCircle className="w-3 h-3 ml-2 text-white flex-shrink-0" />
                )}
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className={`mt-2 p-2 rounded-lg border transition-all duration-500 ${
            isCorrect 
              ? "bg-green-50 border-green-200" 
              : "bg-red-50 border-red-200"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <Zap className="w-4 h-4 text-yellow-500" />
                </div>
              ) : (
                <XCircle className="w-4 h-4 text-red-600" />
              )}
              <span className={`text-base font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                {isCorrect ? "Superpoder em ação!" : "Ainda não dominou!"}
              </span>
              {isCorrect && (
                <Badge className="bg-green-100 text-green-700 border-green-300 text-xs">
                  +1 Ponto
                </Badge>
              )}
            </div>
            <div className="bg-white p-2 rounded border-l-2 border-[#E40045] mb-3">
              <p className="text-base">
                <strong className="text-[#E40045]">Condição:</strong> {currentQ.explanation}
              </p>
              {!isCorrect && (
                <p className="text-base mt-1 text-gray-600">
                  <strong>Resposta correta:</strong> {String.fromCharCode(65 + currentQ.correct)}) {currentQ.options[currentQ.correct]}
                </p>
              )}
            </div>
            
            {/* Mensagem motivacional */}
            {currentQuestion < shuffledQuizData.length - 1 && (
              <div className="text-center py-2">
                <p className="text-sm text-gray-500">
                  {currentQuestion < 10 && "Você está indo muito bem! Continue assim!"}
                  {currentQuestion >= 10 && currentQuestion < 20 && "Metade do caminho! Seu superpoder está despertando!"}
                  {currentQuestion >= 20 && currentQuestion < 30 && "Quase lá! Você está dominando a psicossomática!"}
                  {currentQuestion === 30 && "Última pergunta! Você chegou longe!"}
                </p>
              </div>
            )}
            
            {/* Botão de próxima pergunta */}
            {currentQuestion < shuffledQuizData.length - 1 ? (
              <Button 
                onClick={handleNext} 
                className="w-full bg-[#E40045] hover:bg-[#E40045]/90 shadow-lg"
                size="lg"
              >
                Próxima Pergunta
              </Button>
            ) : (
              <Button 
                onClick={handleNext} 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-500"
                size="lg"
              >
                <Trophy className="w-5 h-5 mr-2" />
                <span className="font-bold">VER RESULTADO</span>
                <Award className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        )}


      </div>
    </div>
  );
}