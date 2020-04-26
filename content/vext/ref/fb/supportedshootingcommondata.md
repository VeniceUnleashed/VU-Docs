---
title: SupportedShootingCommonData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[SupportedShootingCommonData](#constructor-0)**() |
| **[SupportedShootingCommonData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SupportedShootingCommonData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SupportedShootingCommonData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "aimingConstraints" >}} | [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata) |
| {{< prop "enterSupportedShootingAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "binding" >}} | [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding) |
| {{< prop "stand" >}} | [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) |
| {{< prop "crouch" >}} | [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SupportedShootingCommonData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SupportedShootingCommonData {#constructor-0}
> **SupportedShootingCommonData**()

Creates a new [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata) frostbite instance.

### SupportedShootingCommonData {#constructor-1}
> **SupportedShootingCommonData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SupportedShootingCommonData {#constructor-2}
> **SupportedShootingCommonData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata). |

### SupportedShootingCommonData {#constructor-3}
> **SupportedShootingCommonData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata). |

## Properties
### {{% prop-heading "aimingConstraints" %}}
> **[AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata)**

### {{% prop-heading "enterSupportedShootingAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "binding" %}}
> **[SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding)**

### {{% prop-heading "stand" %}}
> **[SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking)**

### {{% prop-heading "crouch" %}}
> **[SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata) type.

