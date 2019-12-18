---
title: GameInteractionEntityData (Frostbite Container)
---
### Base Classes

[InteractionEntityData](InteractionEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GameInteractionEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| GameInteractionEntityData(GameInteractionEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GameInteractionEntityData([InteractionEntityData](InteractionEntityData) other)      | Upcast an instance of type [InteractionEntityData](InteractionEntityData) to [GameInteractionEntityData](GameInteractionEntityData).      |
| GameInteractionEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [GameInteractionEntityData](GameInteractionEntityData).                    |
| GameInteractionEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GameInteractionEntityData](GameInteractionEntityData).              |
| GameInteractionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GameInteractionEntityData](GameInteractionEntityData).                            |
| GameInteractionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GameInteractionEntityData](GameInteractionEntityData).                    |
| GameInteractionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GameInteractionEntityData](GameInteractionEntityData).              |
| GameInteractionEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameInteractionEntityData](GameInteractionEntityData). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| blink                      | [BlinkType](BlinkType)                         |             |
| capturepointVerticalOffset | number                                         |             |
| delayBetweenUses           | number                                         |             |
| teamId                     | [TeamId](TeamId)                               |             |
| inputAction                | [EntryInputActionEnum](EntryInputActionEnum)   |             |
| holdToInteractTime         | number                                         |             |
| interactionEntityType      | [InteractionEntityType](InteractionEntityType) |             |
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
| [GameInteractionEntityData](GameInteractionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameInteractionEntityData](GameInteractionEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
