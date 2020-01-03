---
title: InputConfigurationAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InputConfigurationAsset()                                                          | Create a new instance of this container type.                                                                                         |
| InputConfigurationAsset(InputConfigurationAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InputConfigurationAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset/).                                      |
| InputConfigurationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset/). |

## Properties

| Name                                  | Type                                                   | Description |
| ------------------------------------- | ------------------------------------------------------ | ----------- |
| defaultInputConceptDefinition         | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/)   |             |
| defaultExclusiveInputConcepts         | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers/)\[\] |             |
| userConfigurableActionMaps            | [EditableActionMap](/vext/ref/fb/editableactionmap/)\[\]             |             |
| togglePoseAction                      | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)           |             |
| crouchAction                          | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)           |             |
| crouchAndHoldAction                   | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)           |             |
| pickupInteractionAction               | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)           |             |
| firingDisablingTransitions            | [PoseTransition](/vext/ref/fb/posetransition/)\[\]                   |             |
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
| [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
