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
| ShaderCustomizationUnlockPartCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/). |

## Properties

| Name           | Type                                                           | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| meshBlueprints | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)\[\]                         |             |
| shaderNodeName | string                                                         |             |
| meshMaterials  | [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata/)\[\] |             |

## Methods

| Type                                                                               | Name            | Parameters                                     |
| ---------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
