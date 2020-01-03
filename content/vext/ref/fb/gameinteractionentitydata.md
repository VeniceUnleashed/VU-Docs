---
title: GameInteractionEntityData
---
### Base Classes

[InteractionEntityData](/vext/ref/fb/interactionentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GameInteractionEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| GameInteractionEntityData(GameInteractionEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GameInteractionEntityData([InteractionEntityData](/vext/ref/fb/interactionentitydata/) other)      | Upcast an instance of type [InteractionEntityData](/vext/ref/fb/interactionentitydata/) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/).      |
| GameInteractionEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/).                    |
| GameInteractionEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/).              |
| GameInteractionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/).                            |
| GameInteractionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/).                    |
| GameInteractionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/).              |
| GameInteractionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| blink                      | [BlinkType](/vext/ref/fb/blinktype/)                         |             |
| capturepointVerticalOffset | number                                         |             |
| delayBetweenUses           | number                                         |             |
| teamId                     | [TeamId](/vext/ref/fb/teamid/)                               |             |
| inputAction                | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)   |             |
| holdToInteractTime         | number                                         |             |
| interactionEntityType      | [InteractionEntityType](/vext/ref/fb/interactionentitytype/) |             |
| interactionSid             | string                                         |             |
| interactingSid             | string                                         |             |
| friendlyTextSid            | string                                         |             |
| nameSid                    | string                                         |             |
| interactionVerticalOffset  | number                                         |             |
| enemyTextSid               | string                                         |             |
| shrinkSnap                 | bool                                           |             |
| showAsCapturePoint         | bool                                           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
