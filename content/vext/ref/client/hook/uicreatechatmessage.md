---
title: UI:CreateChatMessage
---
## Description



## Parameters

| Type   | Name          | Description                    |
| ------ | ------------- | ------------------------------ |
| string | message       |                                |
| int    | channelID     |                                |
| int    | playerID      |                                |
| int    | recipientMask |                                |
| bool   | senderIsDead  |                                |

## Usage Example

``` lua
Hooks:Install('UI:CreateChatMessage', 100, function(hook, message, channelID, playerID, recipientMask, senderIsDead)
    --Add example code here...
end)
```
