window.onload = function () {
    if (window.history && window.history.pushState) {
        window.history.pushState('forward', null, ''); // 一旦戻るボタンを無効にする
        window.onpopstate = function () {
            window.history.pushState('forward', null, ''); // ユーザーが戻るボタンを押したときに再度戻るボタンを無効にする
            // ここに前のページへのリダイレクト処理を記述する
            // 例: location.href = '前のページのURL';
        };
    }
};