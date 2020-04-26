---
title: InputConfigurationAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[InputConfigurationAsset](#constructor-0)**() |
| **[InputConfigurationAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InputConfigurationAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[InputConfigurationAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "defaultInputConceptDefinition" >}} | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) \| nil |
| {{< prop "defaultExclusiveInputConcepts" >}} | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)[] |
| {{< prop "userConfigurableActionMaps" >}} | [EditableActionMap](/vext/ref/fb/editableactionmap)[] |
| {{< prop "togglePoseAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "crouchAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "crouchAndHoldAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "pickupInteractionAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "firingDisablingTransitions" >}} | [PoseTransition](/vext/ref/fb/posetransition)[] |
| {{< prop "sprintReleaseTime" >}} | float |
| {{< prop "throttleInputRequiredForSprint" >}} | float |
| {{< prop "standAutomaticallyIfSprinting" >}} | bool |
| {{< prop "proneToStandOnJump" >}} | bool |
| {{< prop "disableCrawlingWhileReloading" >}} | bool |
| {{< prop "disableFiringWhileDeployingBipod" >}} | bool |
| {{< prop "disableFiringWhileJumping" >}} | bool |
| {{< prop "disableSprintingWhileReloading" >}} | bool |
| {{< prop "enableSprintToCrouchTransition" >}} | bool |
| {{< prop "stopSprintingWhenReleasingThrottle" >}} | bool |
| {{< prop "stopSprintingWhenReleasingSprint" >}} | bool |
| {{< prop "waitForSprintReleaseBeforeSprintAgain" >}} | bool |
| {{< prop "vehicleBoostIsToggle" >}} | bool |
| {{< prop "inputCurvesEnabled" >}} | bool |
| {{< prop "disableCrawlingWhileFiring" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InputConfigurationAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InputConfigurationAsset {#constructor-0}
> **InputConfigurationAsset**()

Creates a new [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset) frostbite instance.

### InputConfigurationAsset {#constructor-1}
> **InputConfigurationAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InputConfigurationAsset {#constructor-2}
> **InputConfigurationAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset). |

### InputConfigurationAsset {#constructor-3}
> **InputConfigurationAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset). |

## Properties
### {{% prop-heading "defaultInputConceptDefinition" %}}
> **[EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata)** | **nil**

### {{% prop-heading "defaultExclusiveInputConcepts" %}}
> **[InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)**[]

### {{% prop-heading "userConfigurableActionMaps" %}}
> **[EditableActionMap](/vext/ref/fb/editableactionmap)**[]

### {{% prop-heading "togglePoseAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "crouchAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "crouchAndHoldAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "pickupInteractionAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "firingDisablingTransitions" %}}
> **[PoseTransition](/vext/ref/fb/posetransition)**[]

### {{% prop-heading "sprintReleaseTime" %}}
> **float**

### {{% prop-heading "throttleInputRequiredForSprint" %}}
> **float**

### {{% prop-heading "standAutomaticallyIfSprinting" %}}
> **bool**

### {{% prop-heading "proneToStandOnJump" %}}
> **bool**

### {{% prop-heading "disableCrawlingWhileReloading" %}}
> **bool**

### {{% prop-heading "disableFiringWhileDeployingBipod" %}}
> **bool**

### {{% prop-heading "disableFiringWhileJumping" %}}
> **bool**

### {{% prop-heading "disableSprintingWhileReloading" %}}
> **bool**

### {{% prop-heading "enableSprintToCrouchTransition" %}}
> **bool**

### {{% prop-heading "stopSprintingWhenReleasingThrottle" %}}
> **bool**

### {{% prop-heading "stopSprintingWhenReleasingSprint" %}}
> **bool**

### {{% prop-heading "waitForSprintReleaseBeforeSprintAgain" %}}
> **bool**

### {{% prop-heading "vehicleBoostIsToggle" %}}
> **bool**

### {{% prop-heading "inputCurvesEnabled" %}}
> **bool**

### {{% prop-heading "disableCrawlingWhileFiring" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset) type.

