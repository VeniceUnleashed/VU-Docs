---
title: AudioLanguageSetting (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AudioLanguageSetting()                                                          | Create a new instance of this container type.                                                                                   |
| AudioLanguageSetting(AudioLanguageSetting other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AudioLanguageSetting([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AudioLanguageSetting](AudioLanguageSetting). |

## Properties

| Name        | Type                                             | Description |
| ----------- | ------------------------------------------------ | ----------- |
| name        | string                                           |             |
| nameHash    | number                                           |             |
| displayName | string                                           |             |
| mappings    | [AudioLanguageMapping](AudioLanguageMapping)\[\] |             |
| isDefault   | bool                                             |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AudioLanguageSetting](AudioLanguageSetting) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AudioLanguageSetting](AudioLanguageSetting) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
