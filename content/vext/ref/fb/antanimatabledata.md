---
title: AntAnimatableData
---


## Summary
### Constructors
| |
| ----------- |
| **[AntAnimatableData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "actor" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "proceduralAwareness" >}} | [ProceduralAwarenessAntRefs](/vext/ref/fb/proceduralawarenessantrefs) \| nil |
| {{< prop "rightHandEffectorDisableOverride" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "leftHandEffectorDisableOverride" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "masterSkeletonAsset" >}} | [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntAnimatableData](/vext/ref/fb/antanimatabledata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntAnimatableData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntAnimatableData {#constructor-0}
> **AntAnimatableData**()

Creates a new [AntAnimatableData](/vext/ref/fb/antanimatabledata) frostbite structure.

## Properties
### {{% prop-heading "actor" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "proceduralAwareness" %}}
> **[ProceduralAwarenessAntRefs](/vext/ref/fb/proceduralawarenessantrefs)** | **nil**

### {{% prop-heading "rightHandEffectorDisableOverride" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "leftHandEffectorDisableOverride" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "masterSkeletonAsset" %}}
> **[MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset)** | **nil**

## Methods
### Clone
> **Clone**(): [AntAnimatableData](/vext/ref/fb/antanimatabledata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntAnimatableData](/vext/ref/fb/antanimatabledata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntAnimatableData](/vext/ref/fb/antanimatabledata) type.

