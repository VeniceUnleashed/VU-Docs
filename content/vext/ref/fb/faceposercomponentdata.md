---
title: FaceposerComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FaceposerComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| FaceposerComponentData(FaceposerComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FaceposerComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata/).                      |
| FaceposerComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata/).                    |
| FaceposerComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata/).              |
| FaceposerComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata/). |

## Properties

| Name                     | Type                 | Description |
| ------------------------ | -------------------- | ----------- |
| facePoserEnabled         | [AntRef](/vext/ref/fb/antref/)     |             |
| lodDistance              | number               |             |
| facePoseLibraryReference | [AntRef](/vext/ref/fb/antref/)     |             |
| facePoseLibrary          | [AntRef](/vext/ref/fb/antref/)\[\] |             |
| facePoserDofSetName      | string               |             |
| shaderExposedValues      | string\[\]           |             |
| facePoseLibraryIndex     | number               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
