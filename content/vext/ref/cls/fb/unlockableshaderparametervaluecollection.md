---
title: UnlockableShaderParameterValueCollection (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                         | Description                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UnlockableShaderParameterValueCollection()                                                          | Create a new instance of this container type.                                                                                                                           |
| UnlockableShaderParameterValueCollection(UnlockableShaderParameterValueCollection other)            | Create a reference copy of an instance of the same type.                                                                                                                |
| UnlockableShaderParameterValueCollection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UnlockableShaderParameterValueCollection](UnlockableShaderParameterValueCollection). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| shaderParameterName | string |             |

## Methods

| Type                                                                                 | Name            | Parameters                                     |
| ------------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UnlockableShaderParameterValueCollection](UnlockableShaderParameterValueCollection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UnlockableShaderParameterValueCollection](UnlockableShaderParameterValueCollection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
