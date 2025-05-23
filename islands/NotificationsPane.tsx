import { isNotificationsPaneActive } from "#lib/stores/notificationsPane.ts";

export default function NotificationsPane() {
  if (!isNotificationsPaneActive.value) return null;

  return (
    <aside id="pane_notifications" className="pane">
      <div className="place-items-center flex h-[50px] gap-xs px-sm">
        <p>Notifications</p>
        <button
          className="contents"
          type="button"
          onClick={() => (isNotificationsPaneActive.value = false)}
        >
          <i className="icon">close_small</i>
        </button>
      </div>

      <label
        htmlFor="searchbar"
        data-props="--input"
        style="border-radius: 0; margin-inline: -2px;"
      >
        <i class="icon">
          search
        </i>
        <input
          type="text"
          className="rounded-none"
          name="searchbar"
          placeholder="Type in to filter list"
        />
        <i class="icon">
          keyboard_command_key
        </i>
      </label>
    </aside>
  );
}
