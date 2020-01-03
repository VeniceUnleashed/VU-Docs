---
title: InputModifierEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InputModifierEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| InputModifierEntityData(InputModifierEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InputModifierEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata/).                            |
| InputModifierEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata/).                    |
| InputModifierEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata/).              |
| InputModifierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata/). |

## Properties

| Name    | Type                                         | Description |
| ------- | -------------------------------------------- | ----------- |
| action  | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| scale   | number                                       |             |
| offset  | number                                       |             |
| enabled | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
