---
title: FaceposerComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FaceposerComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| FaceposerComponentData(FaceposerComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FaceposerComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [FaceposerComponentData](FaceposerComponentData).                      |
| FaceposerComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FaceposerComponentData](FaceposerComponentData).                    |
| FaceposerComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FaceposerComponentData](FaceposerComponentData).              |
| FaceposerComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FaceposerComponentData](FaceposerComponentData). |

## Properties

| Name                     | Type                 | Description |
| ------------------------ | -------------------- | ----------- |
| facePoserEnabled         | [AntRef](AntRef)     |             |
| lodDistance              | number               |             |
| facePoseLibraryReference | [AntRef](AntRef)     |             |
| facePoseLibrary          | [AntRef](AntRef)\[\] |             |
| facePoserDofSetName      | string               |             |
| shaderExposedValues      | string\[\]           |             |
| facePoseLibraryIndex     | number               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FaceposerComponentData](FaceposerComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FaceposerComponentData](FaceposerComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
