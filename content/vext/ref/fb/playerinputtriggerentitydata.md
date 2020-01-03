---
title: PlayerInputTriggerEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerInputTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| PlayerInputTriggerEntityData(PlayerInputTriggerEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| PlayerInputTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata/).                            |
| PlayerInputTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata/).                    |
| PlayerInputTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata/).              |
| PlayerInputTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata/). |

## Properties

| Name                    | Type                                         | Description |
| ----------------------- | -------------------------------------------- | ----------- |
| realm                   | [Realm](/vext/ref/fb/realm/)                               |             |
| entryInputActions       | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| valueModifier           | number                                       |             |
| trailingValueAtStart    | number                                       |             |
| accumulatedValueAtStart | number                                       |             |
| sendTriggerEvents       | bool                                         |             |
| enabledFromStart        | bool                                         |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
