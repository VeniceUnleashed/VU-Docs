---
title: ServerBackendAttributeMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[ServerBackendAttributeMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "attribute" >}} | [ServerBackendAttribute](/vext/ref/fb/serverbackendattribute) |
| {{< prop "setting" >}} | string |
| {{< prop "defaultValue" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ServerBackendAttributeMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ServerBackendAttributeMapping {#constructor-0}
> **ServerBackendAttributeMapping**()

Creates a new [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) frostbite structure.

## Properties
### {{% prop-heading "attribute" %}}
> **[ServerBackendAttribute](/vext/ref/fb/serverbackendattribute)**

### {{% prop-heading "setting" %}}
> **string**

### {{% prop-heading "defaultValue" %}}
> **string**

## Methods
### Clone
> **Clone**(): [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) type.

