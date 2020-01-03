---
title: UnlockableShaderParameterValueCollection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                         | Description                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UnlockableShaderParameterValueCollection()                                                          | Create a new instance of this container type.                                                                                                                           |
| UnlockableShaderParameterValueCollection(UnlockableShaderParameterValueCollection other)            | Create a reference copy of an instance of the same type.                                                                                                                |
| UnlockableShaderParameterValueCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockableShaderParameterValueCollection](UnlockableShaderParameterValueCollection). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| shaderParameterName | string |             |

## Methods

| Type                                                                                 | Name            | Parameters                                     |
| ------------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UnlockableShaderParameterValueCollection](UnlockableShaderParameterValueCollection) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockableShaderParameterValueCollection](UnlockableShaderParameterValueCollection) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
