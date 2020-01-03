---
title: UISetupServerWizardCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UISetupServerWizardCompData()                                                          | Create a new instance of this container type.                                                                                                 |
| UISetupServerWizardCompData(UISetupServerWizardCompData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| UISetupServerWizardCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISetupServerWizardCompData](UISetupServerWizardCompData).                  |
| UISetupServerWizardCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISetupServerWizardCompData](UISetupServerWizardCompData).                                      |
| UISetupServerWizardCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISetupServerWizardCompData](UISetupServerWizardCompData). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| passwdMinLen | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UISetupServerWizardCompData](UISetupServerWizardCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISetupServerWizardCompData](UISetupServerWizardCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
