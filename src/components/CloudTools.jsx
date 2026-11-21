import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleDollarSign,
  CircleHelp,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import {
  COST_RATES,
  QUIZ_QUESTIONS,
  SECURITY_CHECKS,
} from "../data/cloudContent";

function RangeControl({ id, label, value, unit, min, max, step = 1, onChange }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-slate-700">
          {label}
        </label>
        <span className="text-sm font-bold tabular-nums text-indigo-700">
          {value.toLocaleString()} {unit}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-indigo-100 accent-indigo-600"
      />
      <div className="mt-1 flex justify-between text-[11px] text-slate-400">
        <span>{min.toLocaleString()}</span>
        <span>
          {max.toLocaleString()} {unit}
        </span>
      </div>
    </div>
  );
}

export function CloudCostEstimator() {
  const [computeHours, setComputeHours] = useState(160);
  const [storageGb, setStorageGb] = useState(100);
  const [transferGb, setTransferGb] = useState(50);
  const computeCost = computeHours * COST_RATES.computePerHour;
  const storageCost = storageGb * COST_RATES.storagePerGb;
  const transferCost = transferGb * COST_RATES.transferPerGb;
  const total = computeCost + storageCost + transferCost;
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
          <CircleDollarSign size={23} />
        </span>
        <div>
          <h3 className="text-xl font-bold text-slate-950">
            Monthly cost explorer
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Adjust a sample workload to see how cloud usage affects a bill.
          </p>
        </div>
      </div>

      <div className="mt-7 space-y-6">
        <RangeControl
          id="compute-hours"
          label="Compute time"
          value={computeHours}
          unit="hours / month"
          min={0}
          max={730}
          step={10}
          onChange={setComputeHours}
        />
        <RangeControl
          id="storage-gb"
          label="Storage"
          value={storageGb}
          unit="GB"
          min={0}
          max={2000}
          step={25}
          onChange={setStorageGb}
        />
        <RangeControl
          id="transfer-gb"
          label="Data transfer"
          value={transferGb}
          unit="GB"
          min={0}
          max={1000}
          step={10}
          onChange={setTransferGb}
        />
      </div>

      <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Illustrative monthly total
            </p>
            <p
              aria-live="polite"
              className="mt-2 text-4xl font-extrabold tabular-nums"
            >
              {currency.format(total)}
            </p>
          </div>
          <ClipboardCheck size={27} className="text-indigo-300" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-xs">
          <div>
            <p className="text-slate-400">Compute</p>
            <p className="mt-1 font-semibold">{currency.format(computeCost)}</p>
          </div>
          <div>
            <p className="text-slate-400">Storage</p>
            <p className="mt-1 font-semibold">{currency.format(storageCost)}</p>
          </div>
          <div>
            <p className="text-slate-400">Transfer</p>
            <p className="mt-1 font-semibold">{currency.format(transferCost)}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Learning example only, not a quote. Real prices vary by provider,
        region, service tier, discounts, and usage.
      </p>
    </article>
  );
}

export function CloudSecurityChecklist() {
  const [checkedItems, setCheckedItems] = useState([]);
  const complete = checkedItems.length === SECURITY_CHECKS.length;

  function toggleCheck(id) {
    setCheckedItems((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <ShieldCheck size={23} />
        </span>
        <div>
          <h3 className="text-xl font-bold text-slate-950">
            Cloud security checklist
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Select the safeguards you would include in a starter project.
          </p>
        </div>
      </div>
      <p
        className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700"
        aria-live="polite"
      >
        <CheckCircle2
          size={17}
          className={complete ? "text-emerald-600" : "text-indigo-600"}
        />
        {checkedItems.length} of {SECURITY_CHECKS.length} safeguards selected
      </p>
      <div className="mt-4 space-y-3">
        {SECURITY_CHECKS.map(({ id, label }) => {
          const checked = checkedItems.includes(id);
          return (
            <label
              key={id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                checked
                  ? "border-emerald-200 bg-emerald-50/70"
                  : "border-slate-200 hover:border-indigo-200"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleCheck(id)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-indigo-600"
              />
              <span className="text-sm font-medium leading-5 text-slate-700">
                {label}
              </span>
            </label>
          );
        })}
      </div>
      {complete && (
        <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          Great start. Keep reviewing these controls as your project grows.
        </p>
      )}
    </article>
  );
}

export function CloudQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const complete = questionIndex >= QUIZ_QUESTIONS.length;

  function selectAnswer(optionIndex) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === QUIZ_QUESTIONS[questionIndex].answer) {
      setScore((value) => value + 1);
    }
  }

  function nextQuestion() {
    setQuestionIndex((value) => value + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/15 text-indigo-200">
          <CircleHelp size={24} />
        </span>
        {!complete && (
          <span className="text-xs font-semibold text-slate-400">
            Question {questionIndex + 1} of {QUIZ_QUESTIONS.length}
          </span>
        )}
      </div>
      {complete ? (
        <div className="mt-7">
          <p className="text-sm font-semibold text-indigo-200">QUIZ COMPLETE</p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            You scored {score} out of {QUIZ_QUESTIONS.length}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {score === QUIZ_QUESTIONS.length
              ? "Excellent work. You have the cloud fundamentals down."
              : "Review the sections above, then try again to reinforce what you learned."}
          </p>
          <button
            type="button"
            onClick={restartQuiz}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50"
          >
            <RotateCcw size={16} /> Try again
          </button>
        </div>
      ) : (
        <>
          <h3 className="mt-6 text-xl font-bold leading-snug text-white sm:text-2xl">
            {QUIZ_QUESTIONS[questionIndex].question}
          </h3>
          <div className="mt-5 space-y-3">
            {QUIZ_QUESTIONS[questionIndex].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === QUIZ_QUESTIONS[questionIndex].answer;
              const showResult =
                selectedAnswer !== null && (isSelected || isCorrect);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectAnswer(index)}
                  disabled={selectedAnswer !== null}
                  aria-pressed={isSelected}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                    showResult && isCorrect
                      ? "border-emerald-300/50 bg-emerald-400/10 text-emerald-100"
                      : showResult && isSelected
                        ? "border-rose-300/50 bg-rose-400/10 text-rose-100"
                        : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-indigo-300/50 hover:bg-white/[0.08]"
                  }`}
                >
                  {option}
                  {showResult && isCorrect && <Check size={16} />}
                </button>
              );
            })}
          </div>
          {selectedAnswer !== null && (
            <div aria-live="polite">
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {QUIZ_QUESTIONS[questionIndex].explanation}
              </p>
              <button
                type="button"
                onClick={nextQuestion}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                {questionIndex === QUIZ_QUESTIONS.length - 1
                  ? "See results"
                  : "Next question"}
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
