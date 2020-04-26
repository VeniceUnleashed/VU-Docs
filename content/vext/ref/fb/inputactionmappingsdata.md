---
title: InputActionMappingsData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[InputActionMappingsData](#constructor-0)**() |
| **[InputActionMappingsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InputActionMappingsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "mappings" >}} | [InputActionMappingData](/vext/ref/fb/inputactionmappingdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InputActionMappingsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InputActionMappingsData {#constructor-0}
> **InputActionMappingsData**()

Creates a new [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) frostbite instance.

### InputActionMappingsData {#constructor-1}
> **InputActionMappingsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InputActionMappingsData {#constructor-2}
> **InputActionMappingsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata). |

## Properties
### {{% prop-heading "mappings" %}}
> **[InputActionMappingData](/vext/ref/fb/inputactionmappingdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata) type.

