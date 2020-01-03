---
title: ShaderColorUnlockPartCollection
---
### Base Classes

[ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                               | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ShaderColorUnlockPartCollection()                                                                                         | Create a new instance of this container type.                                                                                                                                        |
| ShaderColorUnlockPartCollection(ShaderColorUnlockPartCollection other)                                                    | Create a reference copy of an instance of the same type.                                                                                                                             |
| ShaderColorUnlockPartCollection([ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection) other) | Upcast an instance of type [ShaderCustomizationUnlockPartCollection](ShaderCustomizationUnlockPartCollection) to [ShaderColorUnlockPartCollection](ShaderColorUnlockPartCollection). |
| ShaderColorUnlockPartCollection([DataContainer](/vext/ref/shared/class/datacontainer) other)                                | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderColorUnlockPartCollection](ShaderColorUnlockPartCollection).                                |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| defaultColorReference | [ColorReference](ColorReference)               |             |
| unlockParts           | [ColorUnlockPartData](ColorUnlockPartData)\[\] |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderColorUnlockPartCollection](ShaderColorUnlockPartCollection) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderColorUnlockPartCollection](ShaderColorUnlockPartCollection) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
