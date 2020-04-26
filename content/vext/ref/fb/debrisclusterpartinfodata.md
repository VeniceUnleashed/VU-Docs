---
title: DebrisClusterPartInfoData
---


## Summary
### Constructors
| |
| ----------- |
| **[DebrisClusterPartInfoData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "angularVelocity" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "linearVelocity" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "numberOfChildren" >}} | int |
| {{< prop "partIndex" >}} | int |
| {{< prop "splitSpeedThreshold" >}} | float |
| {{< prop "inEffectWorldOnly" >}} | bool |
| {{< prop "syncRestPosition" >}} | bool |
| {{< prop "syncContinous" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebrisClusterPartInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebrisClusterPartInfoData {#constructor-0}
> **DebrisClusterPartInfoData**()

Creates a new [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) frostbite structure.

## Properties
### {{% prop-heading "angularVelocity" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "linearVelocity" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "numberOfChildren" %}}
> **int**

### {{% prop-heading "partIndex" %}}
> **int**

### {{% prop-heading "splitSpeedThreshold" %}}
> **float**

### {{% prop-heading "inEffectWorldOnly" %}}
> **bool**

### {{% prop-heading "syncRestPosition" %}}
> **bool**

### {{% prop-heading "syncContinous" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) type.

