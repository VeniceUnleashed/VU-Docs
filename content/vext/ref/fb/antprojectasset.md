---
title: AntProjectAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AntProjectAsset()                                                          | Create a new instance of this container type.                                                                         |
| AntProjectAsset(AntProjectAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AntProjectAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AntProjectAsset](AntProjectAsset).                                      |
| AntProjectAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntProjectAsset](AntProjectAsset). |

## Properties

| Name                 | Type                                   | Description |
| -------------------- | -------------------------------------- | ----------- |
| packageAssets        | [AntPackageAsset](AntPackageAsset)\[\] |             |
| antNativeProjectName | string                                 |             |
| sceneOp              | [AntRef](AntRef)                       |             |
| projectId            | number                                 |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AntProjectAsset](AntProjectAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntProjectAsset](AntProjectAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
