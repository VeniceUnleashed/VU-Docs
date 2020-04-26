---
title: ExtendedConstraintsData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ExtendedConstraintsData](#constructor-0)**() |
| **[ExtendedConstraintsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ExtendedConstraintsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "heading" >}} | float |
| {{< prop "width" >}} | float |
| {{< prop "falloff" >}} | float |
| {{< prop "angularConstraintMin" >}} | float |
| {{< prop "angularConstraintMax" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ExtendedConstraintsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ExtendedConstraintsData {#constructor-0}
> **ExtendedConstraintsData**()

Creates a new [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata) frostbite instance.

### ExtendedConstraintsData {#constructor-1}
> **ExtendedConstraintsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ExtendedConstraintsData {#constructor-2}
> **ExtendedConstraintsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata). |

## Properties
### {{% prop-heading "heading" %}}
> **float**

### {{% prop-heading "width" %}}
> **float**

### {{% prop-heading "falloff" %}}
> **float**

### {{% prop-heading "angularConstraintMin" %}}
> **float**

### {{% prop-heading "angularConstraintMax" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata) type.

