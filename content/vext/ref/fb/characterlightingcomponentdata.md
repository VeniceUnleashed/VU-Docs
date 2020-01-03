---
title: CharacterLightingComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterLightingComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| CharacterLightingComponentData(CharacterLightingComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| CharacterLightingComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata/).                      |
| CharacterLightingComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata/).                    |
| CharacterLightingComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata/).              |
| CharacterLightingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata/). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| bottomLight           | [Vec3](/vext/ref/shared/class/vec3)              |             |
| topLight              | [Vec3](/vext/ref/shared/class/vec3)              |             |
| characterLightingMode | [CharacterLightingMode](/vext/ref/fb/characterlightingmode/) |             |
| cameraUpRotation      | number                                         |             |
| topLightDirY          | number                                         |             |
| blendFactor           | number                                         |             |
| topLightDirX          | number                                         |             |
| lockToCameraDirection | bool                                           |             |
| firstPersonEnable     | bool                                           |             |
| characterLightEnable  | bool                                           |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
