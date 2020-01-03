bool `ResourceManager:LoadBundle`, string bundle, compartment

`Player:SelectTeam`, \[player\], teamId

`Server:SuppressEnemies`, number suppressionModifier

entity `ServerEntityFactory:Create`, data, transform

`Input:PreUpdate`, cache, \[number deltaTime\]

`UI:InputConceptEvent`, eventType, action

`UI:CreateChatMessage`, string message, number channel, number playerId, number recipientMask, bool senderIsDead

`UI:EnableCursorMode`, bool enable, number cursor

bool `UI:PushScreen`, screen, number graphPriority, \[parentGraph\]

`ClientChatManager:IncomingMessage`, string message, number playerId, number recipientMask, number channel, bool senderIsDead

entity `ClientEntityFactory:Create`, data, transform
