---
title: RegularCameraViewData
---


## Summary
### Constructors
| |
| ----------- |
| **[RegularCameraViewData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "meshOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "inputSuppression" >}} | [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) |
| {{< prop "fieldOfView" >}} | float |
| {{< prop "mesh" >}} | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset) \| nil |
| {{< prop "screenExposureAreaScale" >}} | float |
| {{< prop "maskMeshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "lockMeshToRenderView" >}} | bool |
| {{< prop "allowFieldOfViewScaling" >}} | bool |
| {{< prop "flirEnabled" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RegularCameraViewData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RegularCameraViewData {#constructor-0}
> **RegularCameraViewData**()

Creates a new [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata) frostbite structure.

## Properties
### {{% prop-heading "meshOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "inputSuppression" %}}
> **[InputSuppressionData](/vext/ref/fb/inputsuppressiondata)**

### {{% prop-heading "fieldOfView" %}}
> **float**

### {{% prop-heading "mesh" %}}
> **[RigidMeshAsset](/vext/ref/fb/rigidmeshasset)** | **nil**

### {{% prop-heading "screenExposureAreaScale" %}}
> **float**

### {{% prop-heading "maskMeshBlueprint" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

### {{% prop-heading "lockMeshToRenderView" %}}
> **bool**

### {{% prop-heading "allowFieldOfViewScaling" %}}
> **bool**

### {{% prop-heading "flirEnabled" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RegularCameraViewData](/vext/ref/fb/regularcameraviewdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata) type.

