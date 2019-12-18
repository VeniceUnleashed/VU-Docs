---
title: CharacterLightingComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterLightingComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| CharacterLightingComponentData(CharacterLightingComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| CharacterLightingComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CharacterLightingComponentData](CharacterLightingComponentData).                      |
| CharacterLightingComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterLightingComponentData](CharacterLightingComponentData).                    |
| CharacterLightingComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterLightingComponentData](CharacterLightingComponentData).              |
| CharacterLightingComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterLightingComponentData](CharacterLightingComponentData). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| bottomLight           | [Vec3](/vext/ref/cls/shr/Vec3)              |             |
| topLight              | [Vec3](/vext/ref/cls/shr/Vec3)              |             |
| characterLightingMode | [CharacterLightingMode](CharacterLightingMode) |             |
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
| [CharacterLightingComponentData](CharacterLightingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterLightingComponentData](CharacterLightingComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
