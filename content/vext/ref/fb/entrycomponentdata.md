---
title: EntryComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[EntryComponentData](#constructor-0)**() |
| **[EntryComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntryComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[EntryComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EntryComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EntryComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "soldierOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "aiData" >}} | [GameAIEntryData](/vext/ref/fb/gameaientrydata) \| nil |
| {{< prop "entryClass" >}} | [EntryClass](/vext/ref/fb/entryclass) |
| {{< prop "inputConceptDefinition" >}} | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) \| nil |
| {{< prop "inputMapping" >}} | [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) \| nil |
| {{< prop "inputCurves" >}} | [InputCurveData](/vext/ref/fb/inputcurvedata)[] |
| {{< prop "hudData" >}} | [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata) |
| {{< prop "entryOrderNumber" >}} | int |
| {{< prop "enterImpulse" >}} | float |
| {{< prop "entryRadius" >}} | float |
| {{< prop "triggerEventOnKey" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "entrySpottingSettings" >}} | [EntrySpottingSettings](/vext/ref/fb/entryspottingsettings) |
| {{< prop "poseConstraints" >}} | [PoseConstraintsData](/vext/ref/fb/poseconstraintsdata) |
| {{< prop "soldierTransitionInvisbleTime" >}} | float |
| {{< prop "numberOfStances" >}} | int |
| {{< prop "entryComponentSound" >}} | [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata) \| nil |
| {{< prop "lockSoldierAimingToEntry" >}} | bool |
| {{< prop "isAllowedToExitInAir" >}} | bool |
| {{< prop "show1pSoldierInEntry" >}} | bool |
| {{< prop "stancesEnabled" >}} | bool |
| {{< prop "show1pSoldierInEntryForPlayerOnly" >}} | bool |
| {{< prop "hideSoldierForPassengers" >}} | bool |
| {{< prop "show3pSoldierWeaponInEntry" >}} | bool |
| {{< prop "showSoldierGearInEntry" >}} | bool |
| {{< prop "isShielded" >}} | bool |
| {{< prop "forbiddenForHuman" >}} | bool |
| {{< prop "showSoldierWeaponInEntry" >}} | bool |
| {{< prop "showSoldierInEntry" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntryComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntryComponentData {#constructor-0}
> **EntryComponentData**()

Creates a new [EntryComponentData](/vext/ref/fb/entrycomponentdata) frostbite instance.

### EntryComponentData {#constructor-1}
> **EntryComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntryComponentData](/vext/ref/fb/entrycomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntryComponentData {#constructor-2}
> **EntryComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [EntryComponentData](/vext/ref/fb/entrycomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [EntryComponentData](/vext/ref/fb/entrycomponentdata). |

### EntryComponentData {#constructor-3}
> **EntryComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EntryComponentData](/vext/ref/fb/entrycomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EntryComponentData](/vext/ref/fb/entrycomponentdata). |

### EntryComponentData {#constructor-4}
> **EntryComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EntryComponentData](/vext/ref/fb/entrycomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EntryComponentData](/vext/ref/fb/entrycomponentdata). |

### EntryComponentData {#constructor-5}
> **EntryComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryComponentData](/vext/ref/fb/entrycomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntryComponentData](/vext/ref/fb/entrycomponentdata). |

## Properties
### {{% prop-heading "soldierOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "aiData" %}}
> **[GameAIEntryData](/vext/ref/fb/gameaientrydata)** | **nil**

### {{% prop-heading "entryClass" %}}
> **[EntryClass](/vext/ref/fb/entryclass)**

### {{% prop-heading "inputConceptDefinition" %}}
> **[EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata)** | **nil**

### {{% prop-heading "inputMapping" %}}
> **[InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata)** | **nil**

### {{% prop-heading "inputCurves" %}}
> **[InputCurveData](/vext/ref/fb/inputcurvedata)**[]

### {{% prop-heading "hudData" %}}
> **[EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata)**

### {{% prop-heading "entryOrderNumber" %}}
> **int**

### {{% prop-heading "enterImpulse" %}}
> **float**

### {{% prop-heading "entryRadius" %}}
> **float**

### {{% prop-heading "triggerEventOnKey" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "entrySpottingSettings" %}}
> **[EntrySpottingSettings](/vext/ref/fb/entryspottingsettings)**

### {{% prop-heading "poseConstraints" %}}
> **[PoseConstraintsData](/vext/ref/fb/poseconstraintsdata)**

### {{% prop-heading "soldierTransitionInvisbleTime" %}}
> **float**

### {{% prop-heading "numberOfStances" %}}
> **int**

### {{% prop-heading "entryComponentSound" %}}
> **[EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata)** | **nil**

### {{% prop-heading "lockSoldierAimingToEntry" %}}
> **bool**

### {{% prop-heading "isAllowedToExitInAir" %}}
> **bool**

### {{% prop-heading "show1pSoldierInEntry" %}}
> **bool**

### {{% prop-heading "stancesEnabled" %}}
> **bool**

### {{% prop-heading "show1pSoldierInEntryForPlayerOnly" %}}
> **bool**

### {{% prop-heading "hideSoldierForPassengers" %}}
> **bool**

### {{% prop-heading "show3pSoldierWeaponInEntry" %}}
> **bool**

### {{% prop-heading "showSoldierGearInEntry" %}}
> **bool**

### {{% prop-heading "isShielded" %}}
> **bool**

### {{% prop-heading "forbiddenForHuman" %}}
> **bool**

### {{% prop-heading "showSoldierWeaponInEntry" %}}
> **bool**

### {{% prop-heading "showSoldierInEntry" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntryComponentData](/vext/ref/fb/entrycomponentdata) type.

