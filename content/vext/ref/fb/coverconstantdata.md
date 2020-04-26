---
title: CoverConstantData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[CoverConstantData](#constructor-0)**() |
| **[CoverConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CoverConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CoverConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "slotSize" >}} | float |
| {{< prop "slotSpacing" >}} | float |
| {{< prop "slotEdgeDistance" >}} | float |
| {{< prop "slotBlockedEdgeDistance" >}} | float |
| {{< prop "minimumOpenCoverWidth" >}} | float |
| {{< prop "proneHeight" >}} | float |
| {{< prop "crouchHeight" >}} | float |
| {{< prop "mediumHeight" >}} | float |
| {{< prop "standHeight" >}} | float |
| {{< prop "maxCoversInMemory" >}} | int |
| {{< prop "searchRadius" >}} | float |
| {{< prop "proneCoverModifier" >}} | float |
| {{< prop "crouchCoverModifier" >}} | float |
| {{< prop "mediumCoverModifier" >}} | float |
| {{< prop "standCoverModifier" >}} | float |
| {{< prop "intermediateCoverSlotModifier" >}} | float |
| {{< prop "distanceEvaluationWeight" >}} | float |
| {{< prop "enemiesEvaluationWeight" >}} | float |
| {{< prop "attackPositionEvaluationWeight" >}} | float |
| {{< prop "optimalWeaponDistanceEvaluationWeight" >}} | float |
| {{< prop "dislikePreviousCoverWeight" >}} | float |
| {{< prop "maxHeightDifference" >}} | float |
| {{< prop "switchCoverUrgencyThreshold" >}} | float |
| {{< prop "extraCoverSize" >}} | float |
| {{< prop "reevaluationTime" >}} | float |
| {{< prop "coverSelectionMethod" >}} | [CoverSelectionMethod](/vext/ref/fb/coverselectionmethod) |
| {{< prop "threatRadius" >}} | float |
| {{< prop "inCoverDistance" >}} | float |
| {{< prop "minAttackableEnemyDistance" >}} | float |
| {{< prop "coverFailIgnoreTime" >}} | float |
| {{< prop "startMeleeFromCoverDistance" >}} | float |
| {{< prop "continueMeleeFromCoverDistance" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CoverConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CoverConstantData {#constructor-0}
> **CoverConstantData**()

Creates a new [CoverConstantData](/vext/ref/fb/coverconstantdata) frostbite instance.

### CoverConstantData {#constructor-1}
> **CoverConstantData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CoverConstantData](/vext/ref/fb/coverconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CoverConstantData {#constructor-2}
> **CoverConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CoverConstantData](/vext/ref/fb/coverconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CoverConstantData](/vext/ref/fb/coverconstantdata). |

### CoverConstantData {#constructor-3}
> **CoverConstantData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverConstantData](/vext/ref/fb/coverconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CoverConstantData](/vext/ref/fb/coverconstantdata). |

## Properties
### {{% prop-heading "slotSize" %}}
> **float**

### {{% prop-heading "slotSpacing" %}}
> **float**

### {{% prop-heading "slotEdgeDistance" %}}
> **float**

### {{% prop-heading "slotBlockedEdgeDistance" %}}
> **float**

### {{% prop-heading "minimumOpenCoverWidth" %}}
> **float**

### {{% prop-heading "proneHeight" %}}
> **float**

### {{% prop-heading "crouchHeight" %}}
> **float**

### {{% prop-heading "mediumHeight" %}}
> **float**

### {{% prop-heading "standHeight" %}}
> **float**

### {{% prop-heading "maxCoversInMemory" %}}
> **int**

### {{% prop-heading "searchRadius" %}}
> **float**

### {{% prop-heading "proneCoverModifier" %}}
> **float**

### {{% prop-heading "crouchCoverModifier" %}}
> **float**

### {{% prop-heading "mediumCoverModifier" %}}
> **float**

### {{% prop-heading "standCoverModifier" %}}
> **float**

### {{% prop-heading "intermediateCoverSlotModifier" %}}
> **float**

### {{% prop-heading "distanceEvaluationWeight" %}}
> **float**

### {{% prop-heading "enemiesEvaluationWeight" %}}
> **float**

### {{% prop-heading "attackPositionEvaluationWeight" %}}
> **float**

### {{% prop-heading "optimalWeaponDistanceEvaluationWeight" %}}
> **float**

### {{% prop-heading "dislikePreviousCoverWeight" %}}
> **float**

### {{% prop-heading "maxHeightDifference" %}}
> **float**

### {{% prop-heading "switchCoverUrgencyThreshold" %}}
> **float**

### {{% prop-heading "extraCoverSize" %}}
> **float**

### {{% prop-heading "reevaluationTime" %}}
> **float**

### {{% prop-heading "coverSelectionMethod" %}}
> **[CoverSelectionMethod](/vext/ref/fb/coverselectionmethod)**

### {{% prop-heading "threatRadius" %}}
> **float**

### {{% prop-heading "inCoverDistance" %}}
> **float**

### {{% prop-heading "minAttackableEnemyDistance" %}}
> **float**

### {{% prop-heading "coverFailIgnoreTime" %}}
> **float**

### {{% prop-heading "startMeleeFromCoverDistance" %}}
> **float**

### {{% prop-heading "continueMeleeFromCoverDistance" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CoverConstantData](/vext/ref/fb/coverconstantdata) type.

