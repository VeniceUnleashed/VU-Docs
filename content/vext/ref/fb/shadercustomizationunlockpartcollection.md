---
title: ShaderCustomizationUnlockPartCollection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                        | Description                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderCustomizationUnlockPartCollection()                                                          | Create a new instance of this container type.                                                                                                                         |
| ShaderCustomizationUnlockPartCollection(ShaderCustomizationUnlockPartCollection other)             | Create a reference copy of an instance of the same type.                                                                                                              |
| ShaderCustomizationUnlockPartCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection). |

## Properties

| Name           | Type                                                           | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| meshBlueprints | [ObjectBlueprint](ObjectBlueprint)\[\]                         |             |
| shaderNodeName | string                                                         |             |
| meshMaterials  | [CustomizedMeshMaterialsData](CustomizedMeshMaterialsData)\[\] |             |

## Methods

| Type                                                                               | Name            | Parameters                                     |
| ---------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
