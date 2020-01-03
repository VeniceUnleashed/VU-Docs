---
title: AnimationSignalEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationSignalEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| AnimationSignalEntityData(AnimationSignalEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| AnimationSignalEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata/).                            |
| AnimationSignalEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata/).                    |
| AnimationSignalEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata/).              |
| AnimationSignalEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata/). |

## Properties

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| realm          | [Realm](/vext/ref/fb/realm/)   |             |
| signal         | [AntRef](/vext/ref/fb/antref/) |             |
| intGameState   | [AntRef](/vext/ref/fb/antref/) |             |
| floatGameState | [AntRef](/vext/ref/fb/antref/) |             |
| valueInt       | number           |             |
| valueFloat     | number           |             |
| reset          | bool             |             |
| continuous     | bool             |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
