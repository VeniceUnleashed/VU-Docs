---
title: EntryInputActionMapsData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EntryInputActionMapsData()                                                          | Create a new instance of this container type.                                                                                           |
| EntryInputActionMapsData(EntryInputActionMapsData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EntryInputActionMapsData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EntryInputActionMapsData](EntryInputActionMapsData).                                      |
| EntryInputActionMapsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntryInputActionMapsData](EntryInputActionMapsData). |

## Properties

| Name                    | Type                                                   | Description |
| ----------------------- | ------------------------------------------------------ | ----------- |
| actionMapSettingsScheme | number                                                 |             |
| defaultInputActionMap   | [InputActionMapSlot](InputActionMapSlot)               |             |
| inputActionMaps         | [EntryInputActionMapData](EntryInputActionMapData)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryInputActionMapsData](EntryInputActionMapsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntryInputActionMapsData](EntryInputActionMapsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
