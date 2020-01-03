---
title: AntProjectAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AntProjectAsset()                                                          | Create a new instance of this container type.                                                                         |
| AntProjectAsset(AntProjectAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AntProjectAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AntProjectAsset](/vext/ref/fb/antprojectasset/).                                      |
| AntProjectAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntProjectAsset](/vext/ref/fb/antprojectasset/). |

## Properties

| Name                 | Type                                   | Description |
| -------------------- | -------------------------------------- | ----------- |
| packageAssets        | [AntPackageAsset](/vext/ref/fb/antpackageasset/)\[\] |             |
| antNativeProjectName | string                                 |             |
| sceneOp              | [AntRef](/vext/ref/fb/antref/)                       |             |
| projectId            | number                                 |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AntProjectAsset](/vext/ref/fb/antprojectasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntProjectAsset](/vext/ref/fb/antprojectasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
