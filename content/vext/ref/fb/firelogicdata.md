---
title: FireLogicData
---


## Summary
### Constructors
| |
| ----------- |
| **[FireLogicData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "holdAndRelease" >}} | [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) |
| {{< prop "boltAction" >}} | [BoltActionData](/vext/ref/fb/boltactiondata) |
| {{< prop "recoil" >}} | [RecoilData](/vext/ref/fb/recoildata) |
| {{< prop "fireInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "reloadInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "cycleFireModeInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "triggerPullWeight" >}} | float |
| {{< prop "rateOfFire" >}} | float |
| {{< prop "rateOfFireForBurst" >}} | float |
| {{< prop "clientFireRateMultiplier" >}} | float |
| {{< prop "reloadDelay" >}} | float |
| {{< prop "fireLogicTypeArray" >}} | [FireLogicType](/vext/ref/fb/firelogictype)[] |
| {{< prop "reloadThreshold" >}} | float |
| {{< prop "preFireDelay" >}} | float |
| {{< prop "reloadTime" >}} | float |
| {{< prop "reloadTimeBulletsLeft" >}} | float |
| {{< prop "fireLogicType" >}} | [FireLogicType](/vext/ref/fb/firelogictype) |
| {{< prop "reloadLogic" >}} | [ReloadLogic](/vext/ref/fb/reloadlogic) |
| {{< prop "automaticDelay" >}} | float |
| {{< prop "reloadType" >}} | [ReloadType](/vext/ref/fb/reloadtype) |
| {{< prop "holdOffReloadUntilZoomRelease" >}} | bool |
| {{< prop "forceReloadActionOnFireTrigger" >}} | bool |
| {{< prop "holdOffReloadUntilFireRelease" >}} | bool |
| {{< prop "alwaysAutoReload" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [FireLogicData](/vext/ref/fb/firelogicdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FireLogicData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FireLogicData {#constructor-0}
> **FireLogicData**()

Creates a new [FireLogicData](/vext/ref/fb/firelogicdata) frostbite structure.

## Properties
### {{% prop-heading "holdAndRelease" %}}
> **[HoldAndReleaseData](/vext/ref/fb/holdandreleasedata)**

### {{% prop-heading "boltAction" %}}
> **[BoltActionData](/vext/ref/fb/boltactiondata)**

### {{% prop-heading "recoil" %}}
> **[RecoilData](/vext/ref/fb/recoildata)**

### {{% prop-heading "fireInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "reloadInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "cycleFireModeInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "triggerPullWeight" %}}
> **float**

### {{% prop-heading "rateOfFire" %}}
> **float**

### {{% prop-heading "rateOfFireForBurst" %}}
> **float**

### {{% prop-heading "clientFireRateMultiplier" %}}
> **float**

### {{% prop-heading "reloadDelay" %}}
> **float**

### {{% prop-heading "fireLogicTypeArray" %}}
> **[FireLogicType](/vext/ref/fb/firelogictype)**[]

### {{% prop-heading "reloadThreshold" %}}
> **float**

### {{% prop-heading "preFireDelay" %}}
> **float**

### {{% prop-heading "reloadTime" %}}
> **float**

### {{% prop-heading "reloadTimeBulletsLeft" %}}
> **float**

### {{% prop-heading "fireLogicType" %}}
> **[FireLogicType](/vext/ref/fb/firelogictype)**

### {{% prop-heading "reloadLogic" %}}
> **[ReloadLogic](/vext/ref/fb/reloadlogic)**

### {{% prop-heading "automaticDelay" %}}
> **float**

### {{% prop-heading "reloadType" %}}
> **[ReloadType](/vext/ref/fb/reloadtype)**

### {{% prop-heading "holdOffReloadUntilZoomRelease" %}}
> **bool**

### {{% prop-heading "forceReloadActionOnFireTrigger" %}}
> **bool**

### {{% prop-heading "holdOffReloadUntilFireRelease" %}}
> **bool**

### {{% prop-heading "alwaysAutoReload" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [FireLogicData](/vext/ref/fb/firelogicdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[FireLogicData](/vext/ref/fb/firelogicdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FireLogicData](/vext/ref/fb/firelogicdata) type.

