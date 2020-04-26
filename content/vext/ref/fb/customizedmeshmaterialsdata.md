---
title: CustomizedMeshMaterialsData
---


## Summary
### Constructors
| |
| ----------- |
| **[CustomizedMeshMaterialsData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "meshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "materialNames" >}} | string[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CustomizedMeshMaterialsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CustomizedMeshMaterialsData {#constructor-0}
> **CustomizedMeshMaterialsData**()

Creates a new [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) frostbite structure.

## Properties
### {{% prop-heading "meshBlueprint" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

### {{% prop-heading "materialNames" %}}
> **string**[]

## Methods
### Clone
> **Clone**(): [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata) type.

