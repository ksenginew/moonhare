import * as React from 'react'
import { deepmerge } from './deepmerge'
import { ThemeProviderType } from './provider'

export type WithThemeType<T> = <P, C extends React.ComponentType<P>>(
    Comp: C
) => C &
    React.ComponentType<
        Omit<JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>, 'theme'> & {
            theme?: T
        }
    >

const createWithTheme = <T extends Record<string, any>, S extends T>(
    ThemeProvider: ThemeProviderType<T>,
    ThemeContext: React.Context<T>
) =>
    function withTheme(Comp: any) {
        class ThemedComponent extends React.Component<any> {
            _previous:
                | {
                      a: T
                      b: S | null | undefined
                      result: T
                  }
                | null
                | undefined
            _merge = (a: T, b: S | null | undefined) => {
                const previous = this._previous

                if (previous && previous.a === a && previous.b === b) {
                    return previous.result
                }

                const result = a && b && a !== b ? deepmerge(a, b) : a || b
                this._previous = {
                    a,
                    b,
                    result
                }
                return result
            }

            render() {
                const { _reactThemeProviderForwardedRef, ...rest } = this.props
                return (
                    <ThemeContext.Consumer>
                        {(theme) => (
                            <Comp
                                {...rest}
                                theme={this._merge(theme, rest.theme)}
                                ref={_reactThemeProviderForwardedRef}
                            />
                        )}
                    </ThemeContext.Consumer>
                )
            }
        }

        const ResultComponent = React.forwardRef((props, ref) => (
            <ThemedComponent {...props} _reactThemeProviderForwardedRef={ref} />
        ))
        ResultComponent.displayName = `withTheme(${Comp.displayName || Comp.name})`
        return ResultComponent as any
    }

export default createWithTheme
