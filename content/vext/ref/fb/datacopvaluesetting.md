---
title: DataCopValueSetting
---


## Summary
### Constructors
| |
| ----------- |
| **[DataCopValueSetting](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dataKey" >}} | int |
| {{< prop "frameSpacing" >}} | int |
| {{< prop "offset" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataCopValueSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataCopValueSetting {#constructor-0}
> **DataCopValueSetting**()

Creates a new [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) frostbite structure.

## Properties
### {{% prop-heading "dataKey" %}}
> **int**

### {{% prop-heading "frameSpacing" %}}
> **int**

### {{% prop-heading "offset" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) type.

