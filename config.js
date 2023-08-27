/* ----------------------------------------------
外部API連携用定数
---------------------------------------------- */

// TODO: OpenAIの定数
const OPENAI_API_KEY = "<openaiのAPIキーを入力してください。>";
const OPENAI_MODEL = "gpt-3.5-turbo-16k-0613"
const OPENAI_MAX_TOKENS = 100;
const OPENAI_TEMPERATURE = 0.7;
const OPENAI_TOP_P = 1.0;
const OPENAI_FREQUENCY_PENALTY = 0.0;
const OPENAI_PRESENCE_PENALTY = 0.6;

// TODO: meboの定数
const MEBO_API_KEY = "<meboのAPIキーを入力してください。>";
const MEBO_AGENT_ID = "<meboのAgent IDを入力してください。>";

// TODO: VOICEVOXのURL (デフォルトの設定の場合は変える必要なし)
const VOICE_VOX_API_URL = "http://localhost:50021";

// TODO: ライブ配信するYouTubeのVideoID
const YOUTUBE_VIDEO_ID = '<YouTube Video IDを入力してください。>';
// TODO: YouTube Data APIを利用可能なAPIKEY
const YOUTUBE_DATA_API_KEY = '<YouTube Data APIのAPIキーを入力してください。>';

/* ----------------------------------------------
配信関連定数
---------------------------------------------- */

// NGワードの配列
const NGWORDS = ["死","殺"];

// コメントの取得インターバル (ms)
const INTERVAL_MILL_SECONDS_RETRIEVING_COMMENTS = 10000;
// QUEUEに積まれたコメントを捌くインターバル (ms)
const INTERVAL_MILL_SECONDS_HANDLING_COMMENTS = 3000;

// VOICEVOXのSpeakerID
const VOICEVOX_SPEAKER_ID = '10';

// 最新何件のコメントを処理対象にするか
const NUM_OF_COMMENTS_TO_BE_HANDLED = 3;
