---
title: CharacterPhysicsComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterPhysicsComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| CharacterPhysicsComponentData(CharacterPhysicsComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| CharacterPhysicsComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata/).                      |
| CharacterPhysicsComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata/).                    |
| CharacterPhysicsComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata/).              |
| CharacterPhysicsComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata/). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| characterPhysics       | [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata/) |             |
| enableCollisionOnSpawn | bool                                         |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
