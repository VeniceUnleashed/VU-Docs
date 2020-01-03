---
title: MeleeTriggerEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| MeleeTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| MeleeTriggerEntityData(MeleeTriggerEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| MeleeTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata/).                            |
| MeleeTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata/).                    |
| MeleeTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata/).              |
| MeleeTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata/). |

## Properties

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| connectTransform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| meleeType        | [AntEnumeration](/vext/ref/fb/antenumeration/)                        |             |
| meleeEnabled     | bool                                                    |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
