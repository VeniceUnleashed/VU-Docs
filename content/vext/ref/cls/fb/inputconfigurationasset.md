---
title: InputConfigurationAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InputConfigurationAsset()                                                          | Create a new instance of this container type.                                                                                         |
| InputConfigurationAsset(InputConfigurationAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InputConfigurationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [InputConfigurationAsset](InputConfigurationAsset).                                      |
| InputConfigurationAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InputConfigurationAsset](InputConfigurationAsset). |

## Properties

| Name                                  | Type                                                   | Description |
| ------------------------------------- | ------------------------------------------------------ | ----------- |
| defaultInputConceptDefinition         | [EntryInputActionMapsData](EntryInputActionMapsData)   |             |
| defaultExclusiveInputConcepts         | [InputConceptIdentifiers](InputConceptIdentifiers)\[\] |             |
| userConfigurableActionMaps            | [EditableActionMap](EditableActionMap)\[\]             |             |
| togglePoseAction                      | [EntryInputActionEnum](EntryInputActionEnum)           |             |
| crouchAction                          | [EntryInputActionEnum](EntryInputActionEnum)           |             |
| crouchAndHoldAction                   | [EntryInputActionEnum](EntryInputActionEnum)           |             |
| pickupInteractionAction               | [EntryInputActionEnum](EntryInputActionEnum)           |             |
| firingDisablingTransitions            | [PoseTransition](PoseTransition)\[\]                   |             |
| sprintReleaseTime                     | number                                                 |             |
| throttleInputRequiredForSprint        | number                                                 |             |
| standAutomaticallyIfSprinting         | bool                                                   |             |
| proneToStandOnJump                    | bool                                                   |             |
| disableCrawlingWhileReloading         | bool                                                   |             |
| disableFiringWhileDeployingBipod      | bool                                                   |             |
| disableFiringWhileJumping             | bool                                                   |             |
| disableSprintingWhileReloading        | bool                                                   |             |
| enableSprintToCrouchTransition        | bool                                                   |             |
| stopSprintingWhenReleasingThrottle    | bool                                                   |             |
| stopSprintingWhenReleasingSprint      | bool                                                   |             |
| waitForSprintReleaseBeforeSprintAgain | bool                                                   |             |
| vehicleBoostIsToggle                  | bool                                                   |             |
| inputCurvesEnabled                    | bool                                                   |             |
| disableCrawlingWhileFiring            | bool                                                   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InputConfigurationAsset](InputConfigurationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InputConfigurationAsset](InputConfigurationAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
